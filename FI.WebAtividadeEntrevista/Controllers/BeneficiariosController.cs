using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiariosController : Controller
    {
        // GET: Beneficiarios
        public ActionResult Index()
        {
            return View();
        }

        // GET: Beneficiarios/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Beneficiarios/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Beneficiarios/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Beneficiarios/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Beneficiarios/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Beneficiarios/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Beneficiarios/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
