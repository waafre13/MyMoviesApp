using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml.Linq;
using MyMoviesApp.Models;

namespace MyMoviesApp.Controllers
{
    public class MovieController : ApiController
    {
        // Upload image
        // Get all movies
        [HttpGet]
        public IEnumerable<XElement> GetAllMovies()
        {
            XElement xmlFile = GetXmlFile();

            var movieList = from movies in xmlFile.Descendants("movie")
                           select movies;

            return movieList;
        }
        // Get movie
        // Update movie
        // Add New Movie
        // Delete Movie

        [HttpPost]
        public String UploadImage()
        {
            if (System.Web.HttpContext.Current.Request.Files != null)
            {
                var file = System.Web.HttpContext.Current.Request.Files[0];
                String fileName = file.FileName;

                file.SaveAs(System.Web.Hosting.HostingEnvironment.MapPath(@"~/Images/" + fileName));
            }

            return "Yes, good stuff just happend!";
        }

        public XElement GetXmlFile()
        {
            String filepath = System.Web.Hosting.HostingEnvironment.MapPath(@"~/App_Data/moviesDB.xml");

            return XElement.Load(filepath);
        }
    }
}
