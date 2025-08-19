# 📅 Manipulação de Datas em JavaScript

O JavaScript possui o objeto **`Date`**, que serve para **criar, manipular e formatar datas e horários**.

---

## 1. Criando datas

Existem várias formas de criar um objeto `Date`:

```js
// Data e hora atuais
const agora = new Date();
console.log(agora);

// Criar uma data específica (ano, mês, dia, hora, minuto, segundo, milissegundo)
// OBS: o mês começa em 0 (janeiro = 0, dezembro = 11)
const dataEspecifica = new Date(2025, 0, 19, 15, 30);
console.log(dataEspecifica);

// Criar a partir de uma string
const dataTexto = new Date("2025-08-19T12:00:00");
console.log(dataTexto);

// Criar a partir de milissegundos (contados desde 1 jan 1970 - "Unix Epoch")
const dataMilis = new Date(1690000000000);
console.log(dataMilis);
```

---

## 2. Obtendo partes da data

O objeto `Date` tem vários métodos para pegar informações específicas:

```js
const hoje = new Date();

console.log(hoje.getFullYear()); // Ano (ex: 2025)
console.log(hoje.getMonth());    // Mês (0 a 11)
console.log(hoje.getDate());     // Dia do mês (1 a 31)
console.log(hoje.getDay());      // Dia da semana (0 = domingo, 6 = sábado)
console.log(hoje.getHours());    // Hora (0 a 23)
console.log(hoje.getMinutes());  // Minutos
console.log(hoje.getSeconds());  // Segundos
console.log(hoje.getMilliseconds()); // Milissegundos
```

---

## 3. Alterando datas

Você pode modificar partes específicas da data:

```js
const data = new Date();

data.setFullYear(2030);
data.setMonth(11); // dezembro
data.setDate(25);  // dia do mês
data.setHours(20);

console.log(data);
```

---

## 4. Comparando datas

Datas podem ser comparadas como números, pois o `Date` guarda milissegundos.

```js
const d1 = new Date("2025-01-01");
const d2 = new Date("2025-12-31");

console.log(d1 < d2);  // true
console.log(d1.getTime()); // milissegundos
```

---

## 5. Diferença entre datas

Podemos calcular a diferença em dias, horas ou minutos:

```js
const inicio = new Date("2025-01-01");
const fim = new Date("2025-01-10");

const diffMilis = fim - inicio;
const diffDias = diffMilis / (1000 * 60 * 60 * 24);

console.log(`Diferença: ${diffDias} dias`);
```

---

## 6. Formatando datas

Por padrão, o `Date` não formata datas de forma amigável.
Mas podemos usar métodos prontos ou **Intl.DateTimeFormat**.

```js
const hoje = new Date();

// Métodos básicos
console.log(hoje.toDateString());   // Ex: Tue Aug 19 2025
console.log(hoje.toISOString());    // Ex: 2025-08-19T16:45:30.000Z
console.log(hoje.toLocaleDateString("pt-BR")); // Ex: 19/08/2025
console.log(hoje.toLocaleString("pt-BR", { dateStyle: "full" }));
// Ex: terça-feira, 19 de agosto de 2025
```

---

## 7. Bibliotecas úteis

O `Date` nativo tem limitações. Para facilitar, é comum usar bibliotecas:

* **[date-fns](https://date-fns.org/)** → leve, moderna, modular.
* **[Moment.js](https://momentjs.com/)** → muito popular, mas não é mais recomendada para novos projetos.
* **Luxon** → baseada na API Intl.

Exemplo com **date-fns**:

```js
import { format, addDays } from "date-fns";

const hoje = new Date();
console.log(format(hoje, "dd/MM/yyyy")); // 19/08/2025

const mais7dias = addDays(hoje, 7);
console.log(format(mais7dias, "dd/MM/yyyy")); // 26/08/2025
```

---

## 🔑 Resumo

* Use `new Date()` para criar datas.
* Métodos `get` e `set` permitem acessar/alterar partes da data.
* Você pode comparar datas como números (milissegundos).
* Use `Intl.DateTimeFormat` ou bibliotecas como **date-fns** para formatar datas.
