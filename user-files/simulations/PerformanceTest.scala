package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PerformanceTest extends Simulation {

  val httpProtocol = http
    .baseUrl("http://jsonplaceholder.typicode.com")
    .inferHtmlResources(
      BlackList(
        """.*\.js""",
        """.*\.css""",
        """.*\.gif""",
        """.*\.jpeg""",
        """.*\.jpg""",
        """.*\.ico""",
        """.*\.woff""",
        """.*\.(t|o)tf""",
        """.*\.png"""
      ),
      WhiteList()
    )
    .acceptHeader(
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
    )
    .acceptEncodingHeader("gzip, deflate, sdch, br")
    .acceptLanguageHeader("pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4")
    .userAgentHeader(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36"
    )

  val headers_Perfomance = Map(
    "Content-Type" -> "application/json",
    "Application-Key" -> "b28b3wsf3345543e3000d3ac06d76",
    "x-test-origin" -> "performance"
  )


  object Login {
    val login = exec(
      http("Login!")
        .post("/users")
        .disableFollowRedirect
        .headers(headers_Perfomance)
        .asJson
        .check(status.is(201))
    )
  }

  object BuscarProduto {
    val buscarProduto = exec(
      http("Buscar produto!")
        .post("/users/1")
        .disableFollowRedirect
        .headers(headers_Perfomance)
        .asJson
        .check(status.is(404))
    )
  }

  object FinalizarCompra {
    val finalizarCompra = exec(
      http("Finalizar Compra!")
        .post("/users/2")
        .disableFollowRedirect
        .headers(headers_Perfomance)
        .asJson
        .check(status.is(404))
    )
  }


  val globalScn = scenario("fluxo principal").exec(
    Login.login,
    BuscarProduto.buscarProduto,
    FinalizarCompra.finalizarCompra

  )

  setUp(
    globalScn.inject(
      rampUsers(20) during (20 seconds),
      nothingFor(4 seconds),
      atOnceUsers(10)
//      constantUsersPerSec(100) during (30 seconds)
//      constantUsersPerSec(8) during (20 seconds)
//      rampUsers(10) during (5 seconds),
//      constantUsersPerSec(20) during (15 seconds),
//      constantUsersPerSec(20) during (15 seconds) randomized,
//      ampUsersPerSec(1) to 4 during (10 minutes),
//      rampUsersPerSec(10) to 20 during (10 minutes) randomized,
//      heavisideUsers(1000) during (20 seconds)
    )
  ).protocols(httpProtocol)
}



