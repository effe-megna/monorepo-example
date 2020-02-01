import { awesomeFn }  from "@ocpi/apilayers"
import pgp from "pg-promise" 



awesomeFn()
console.log(
  pgp({
    capSQL: true
  })
)
console.log("sls-ocpi-authorizer")