using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAtividadeEntrevista.Models
{
    public class Beneficiario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public int IdCliente { get; set; }
    }
}