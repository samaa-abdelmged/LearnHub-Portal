using System.Text.Json.Serialization;

namespace WebApplication2.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Age { get; set; }
        public int DepartmentId { get; set; }

        [JsonIgnore]  // تجاهل عند serialization لتجنب الـ cycle
        public Department? Department { get; set; }
    }
}
