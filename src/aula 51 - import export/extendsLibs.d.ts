// para criar um método que não tem dentro de uma lib, é necessário criar um arquivo com <nomeArquivo>.d.ts, em seguida, ver qual o namespace utilizado no import e por fim dar um declare nesse namespace, passando qual método novo você quer.
declare namespace validator {
  interface ContainsOptions {
    mul(string: string): string;
  }
}
