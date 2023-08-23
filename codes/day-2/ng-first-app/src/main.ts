import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModuleRef, PlatformRef } from "@angular/core";
import { AppModule } from "./app/app.module";


console.log("starting here....")

setTimeout(
  () => {
    const platformRefObject: PlatformRef = platformBrowserDynamic()
    const p: Promise<NgModuleRef<AppModule>> = platformRefObject
      .bootstrapModule(AppModule)

    p
      .then(
        (moduleRef) => { console.log(moduleRef.instance) },
        (err: Error) => { console.log(err.message) }
      )
  },
  2000
)