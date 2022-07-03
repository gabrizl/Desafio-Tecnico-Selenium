$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/RealizarCompra.feature");
formatter.feature({
  "name": "Realizar compra do vestido do tipo casual",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@RealizarCompra"
    }
  ]
});
formatter.scenario({
  "name": "Realizar compra direta",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@RealizarCompra"
    },
    {
      "name": "@RealizarCompraDireta"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao dresses",
  "keyword": "Quando "
});
formatter.match({
  "location": "RealizarCompraSteps.euClicarNoBotaoDresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o vestido certo",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOVestidoCerto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o vestido no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.adicionarOVestidoNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027GABRIEL\u0027, ip: \u0027192.168.1.20\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\gsilv\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52161}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 43350a8b1edb349802ef16e63fb861b3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy20.click(Unknown Source)\r\n\tat pageObjects.RealizarCompraPage.botaoProceedCheckout(RealizarCompraPage.java:67)\r\n\tat stepsDefinitions.RealizarCompraSteps.selecionarOBotaoProceedToCheckout(RealizarCompraSteps.java:37)\r\n\tat ✽.selecionar o botao proceed to checkout(file:src/test/resources/features/RealizarCompra.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "aceitar os termos de servico",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.aceitarOsTermosDeServico()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Selecionar a forma de pagamento",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarAFormaDePagamento()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirmar pedido",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.confirmarPedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema informa que o pedido foi realizado",
  "keyword": "Entao "
});
formatter.match({
  "location": "RealizarCompraSteps.oSistemaInformaQueOPedidoFoiRealizado()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Comprar Vestido Casual selecionando categoria",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@RealizarCompra"
    },
    {
      "name": "@RealizarCompraPorCategoria"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao dresses",
  "keyword": "Quando "
});
formatter.match({
  "location": "RealizarCompraSteps.euClicarNoBotaoDresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a categoria casual dresses",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarACategoriaCasualDresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o vestido certo",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOVestidoCerto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o vestido no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.adicionarOVestidoNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027GABRIEL\u0027, ip: \u0027192.168.1.20\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\gsilv\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52223}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 35db540738dca93289ba8ac374c3feab\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy20.click(Unknown Source)\r\n\tat pageObjects.RealizarCompraPage.botaoProceedCheckout(RealizarCompraPage.java:67)\r\n\tat stepsDefinitions.RealizarCompraSteps.selecionarOBotaoProceedToCheckout(RealizarCompraSteps.java:37)\r\n\tat ✽.selecionar o botao proceed to checkout(file:src/test/resources/features/RealizarCompra.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "aceitar os termos de servico",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.aceitarOsTermosDeServico()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Selecionar a forma de pagamento",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarAFormaDePagamento()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirmar pedido",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.confirmarPedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema informa que o pedido foi realizado",
  "keyword": "Entao "
});
formatter.match({
  "location": "RealizarCompraSteps.oSistemaInformaQueOPedidoFoiRealizado()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Comprar Vestido Casual selecionando categoria",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@RealizarCompra"
    },
    {
      "name": "@RealizarCompraPorCategoria2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao dresses",
  "keyword": "Quando "
});
formatter.match({
  "location": "RealizarCompraSteps.euClicarNoBotaoDresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a categoria casual dresses pela lateral esquerda do site",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarACategoriaCasualDressesPelaLateralEsquerdaDoSite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o vestido certo",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOVestidoCerto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o vestido no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.adicionarOVestidoNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027GABRIEL\u0027, ip: \u0027192.168.1.20\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\gsilv\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52280}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f8b2aaa8d36d1928e8b21fa31bfabc9f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy20.click(Unknown Source)\r\n\tat pageObjects.RealizarCompraPage.botaoProceedCheckout(RealizarCompraPage.java:67)\r\n\tat stepsDefinitions.RealizarCompraSteps.selecionarOBotaoProceedToCheckout(RealizarCompraSteps.java:37)\r\n\tat ✽.selecionar o botao proceed to checkout(file:src/test/resources/features/RealizarCompra.feature:44)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "aceitar os termos de servico",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.aceitarOsTermosDeServico()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecionar o botao proceed to checkout",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarOBotaoProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Selecionar a forma de pagamento",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.selecionarAFormaDePagamento()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirmar pedido",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarCompraSteps.confirmarPedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema informa que o pedido foi realizado",
  "keyword": "Entao "
});
formatter.match({
  "location": "RealizarCompraSteps.oSistemaInformaQueOPedidoFoiRealizado()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
