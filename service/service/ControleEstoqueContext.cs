using Microsoft.EntityFrameworkCore;
using service.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace service
{
    public class ControleEstoqueContext : DbContext
    {
        public ControleEstoqueContext(DbContextOptions<ControleEstoqueContext> options)
            : base(options)
        { }

        public DbSet<Produto> Produtos { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"Server=.\;Database=EFCoreControleEstoque;Trusted_Connection=True;MultipleActiveResultSets=true");
        //}
    }
}
