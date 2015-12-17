using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyMoviesApp.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public String Text { get; set; }
        public int rating { get; set; }
    }
}