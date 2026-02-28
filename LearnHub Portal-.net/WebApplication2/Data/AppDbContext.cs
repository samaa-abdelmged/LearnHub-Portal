namespace WebApplication2.Data
{
    using Microsoft.EntityFrameworkCore;
    using WebApplication2.Models;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Department> Departments => Set<Department>();
        public DbSet<Student> Students => Set<Student>();
        public DbSet<User> Users => Set<User>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Department>().HasIndex(d => d.Name).IsUnique(false);
        }
    }

}
