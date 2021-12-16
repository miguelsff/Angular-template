import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  private scripts: ScriptModel[] = [];

  public load(script: ScriptModel): Observable<ScriptModel> {
    return new Observable<ScriptModel>((observer: Observer<ScriptModel>) => {
      var existingScript = this.scripts.find(s => s.name == script.name);

      // Complete if already loaded
      if (existingScript && existingScript.loaded) {
        observer.next(existingScript);
        observer.complete();
      } else {
        // Add the script
        this.scripts = [...this.scripts, script];

        // Load the script
        let scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = script.src;
        scriptElement.async = script.async;
        scriptElement.defer = script.defer;

        scriptElement.onload = () => {
          script.loaded = true;
          observer.next(script);
          observer.complete();
        };

        scriptElement.onerror = (error: any) => {
          observer.error("Couldn't load script " + script.src);
        };

        document.getElementsByTagName(script.tag)[0].appendChild(scriptElement);
      }
    });
  }

  constructor() { }
}

export interface ScriptModel {
  name: string,
  src: string,
  loaded: boolean,
  async: boolean,
  defer: boolean,
  tag: string
}