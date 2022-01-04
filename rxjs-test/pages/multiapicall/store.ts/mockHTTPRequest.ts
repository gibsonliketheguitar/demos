import { Observable } from "rxjs";

export function mockHTTPRequest(url: string) {
    return Observable.of(`Response from ${url}`).delay(Math.random() * 1000)
}