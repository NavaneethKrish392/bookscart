import { Observable } from "rxjs/internal/Observable";

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}
