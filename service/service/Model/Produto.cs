using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace service.Model
{
    public class Produto
    {
        [Key]
        public int IdProduto { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int Quantidade { get; set; }
        public string Categoria { get; set; }
        public string CodigoBarras { get; set; }
    }
}
