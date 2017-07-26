using System.Web.Mvc;

namespace HTML5AppCache.Controllers
{
    //[OutputCache(VaryByParam = "*", Duration = 0, NoStore = true)]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
