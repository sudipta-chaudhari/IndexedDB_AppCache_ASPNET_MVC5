using System.Web.Mvc;

namespace HTML5AppCache.Controllers
{
    //[OutputCache(VaryByParam = "*", Duration = 0, NoStore = true)]
    public class AboutController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "About Page";

            return View();
        }
    }
}
