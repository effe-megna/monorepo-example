import { awesomeFn }  from "@ocpi/apilayers"
import pgp from "pg-promise" 
import * as O from "fp-ts/lib/Option"

awesomeFn()
console.log(
  pgp({
    capSQL: true
  })
)

console.log(
  O.option.of("333")
)

console.log("sls-ocpi-authorizer")