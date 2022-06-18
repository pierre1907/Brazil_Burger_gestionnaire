@Api(APP_ROOT + "listarticle")
public interface ArticleApi {
  @PostMapping(value= APP_ROOT + "newarticle", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType)
  ArticleDto save(@ResquestBody ArticleDto);

  @GetMapping(value = APP_ROOT + "")
  ArticleDto findBy
}
