using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyMoviesApp.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public String Title { get; set; }
        public String ImageSrc { get; set; }
        public bool Seen { get; set; }
    }
}