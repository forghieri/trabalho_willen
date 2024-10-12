async function calculateFibonacci() {
    const number = document.getElementById('fibonacciNumber').value;
    const startTime = performance.now();
    const response = await fetch('/assets/calculate.php', { // Adicionei o caminho correto
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'fibonacci', number })
    });
    const endTime = performance.now();
    const result = await response.text();
    const executionTime = (endTime - startTime).toFixed(8);
    document.getElementById('results').innerHTML += `<p>Fibonacci (JS): ${result} | Tempo de execução: ${executionTime} ms</p>`;
}

async function calculateFibonacciPHP() {
    const number = document.getElementById('fibonacciNumber').value;
    const startTime = performance.now();
    const response = await fetch('/assets/calculate.php', { // Adicionei o caminho correto
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'fibonacci', number })
    });
    const endTime = performance.now();
    const result = await response.text();
    const executionTime = (endTime - startTime).toFixed(8);
    document.getElementById('results').innerHTML += `<p>Fibonacci (PHP): ${result} | Tempo de execução: ${executionTime} ms</p>`;
}

async function calculateFactorial() {
    const number = document.getElementById('factorialNumber').value;
    const startTime = performance.now();
    const response = await fetch('/assets/calculate.php', { // Adicionei o caminho correto
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'factorial', number })
    });
    const endTime = performance.now();
    const result = await response.text();
    const executionTime = (endTime - startTime).toFixed(8);
    document.getElementById('results').innerHTML += `<p>Fatorial (JS): ${result} | Tempo de execução: ${executionTime} ms</p>`;
}

async function calculateFactorialPHP() {
    const number = document.getElementById('factorialNumber').value;
    const startTime = performance.now();
    const response = await fetch('/assets/calculate.php', { // Adicionei o caminho correto
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'factorial', number })
    });
    const endTime = performance.now();
    const result = await response.text();
    const executionTime = (endTime - startTime).toFixed(8);
    document.getElementById('results').innerHTML += `<p>Fatorial (PHP): ${result} | Tempo de execução: ${executionTime} ms</p>`;
}

async function calculateVectors() {
    const vectorA = document.getElementById('vectorA').value.split(',').map(Number);
    const vectorB = document.getElementById('vectorB').value.split(',').map(Number);
    const startTime = performance.now();
    const response = await fetch('/assets/calculate.php', { // Adicionei o caminho correto
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            action: 'vectors',
            vectorA: JSON.stringify(vectorA),
            vectorB: JSON.stringify(vectorB)
        })
    });
    const endTime = performance.now();
    const result = await response.text();
    const executionTime = (endTime - startTime).toFixed(8);
    document.getElementById('results').innerHTML += `<p>Vetores (JS): ${result} | Tempo de execução: ${executionTime} ms</p>`;
}

async function calculateVectorsPHP() {
    const vectorA = document.getElementById('vectorA').value.split(',').map(Number);
    const vectorB = document.getElementById('vectorB').value.split(',').map(Number);
    const startTime = performance.now();
    const response = await fetch('/assets/calculate.php', { // Adicionei o caminho correto
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            action: 'vectors',
            vectorA: JSON.stringify(vectorA),
            vectorB: JSON.stringify(vectorB)
        })
    });
    const endTime = performance.now();
    const result = await response.text();
    const executionTime = (endTime - startTime).toFixed(8);
    document.getElementById('results').innerHTML += `<p>Vetores (PHP): ${result} | Tempo de execução: ${executionTime} ms</p>`;
}
