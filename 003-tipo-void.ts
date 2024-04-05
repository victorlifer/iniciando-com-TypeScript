// tipo void
// nao retorna nada
function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    name: 'pedro',
    sobrenome: 'victor',
    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('pedro' + 'victor');
pessoa.exibirNome();

export { pessoa };
