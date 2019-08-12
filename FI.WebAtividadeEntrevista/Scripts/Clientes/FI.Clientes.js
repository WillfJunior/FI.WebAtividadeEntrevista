
$(document).ready(function () {
    $("#CPF").mask("999.999.999-99");
    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val(),
                "CPF": $(this).find("#CPF").val().replace(/[^0-9]/g, '')
            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (r) {
                    ModalDialog("Sucesso!", r)
                    $("#formCadastro")[0].reset();
                }
        });
    })

    $("#CPF").blur(function () {
        var cpf = $(this).val();
        ValidaCPF(cpf);

    })


})

function ValidaCPF(cpf) {
    cpf = cpf.replace(/[^0-9]/g, '');
    var somaDigitos = 0;
    var peso = 10;
    var primeiroDigito = 0;
    var segundoDigito = 0;


    for (var i = 0; i < cpf.length - 2; i++) {
        somaDigitos += cpf[i] * peso;
        peso--;
    }
    var resultado = 11 - (somaDigitos % 11);

    primeiroDigito = resultado > 9 ? 0 : resultado;
    somaDigitos = 0;
    peso = 11;

    for (var j = 0; j < cpf.length - 1; j++) {
        somaDigitos += cpf[j] * peso;
        peso--;
    }
    resultado = 11 - (somaDigitos % 11);

    segundoDigito = resultado > 9 ? 0 : resultado;

    var verificadores = cpf.substring(9, 11);
    var calculados = primeiroDigito.toString() + segundoDigito.toString();


    if (calculados !== verificadores) {
        ModalDialog("CPF Invalido!", "Favor verifique a digitação!");
    }
    else {
        VerificaCPF(cpf);
    }

}

function VerificaCPF(cpf) {
    cpf = cpf.replace(/[^0-9]/g, '');
    $.get("/Cliente/VerificaCPF", { cpf }, function (data) {
        
        if (data === "True") {
            
            ModalDialog("CPF Existente", "CPF já existente na base de dados!");
        }

    }).fail(function (r) {
        alert(r.responseText);
    })
}

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}

