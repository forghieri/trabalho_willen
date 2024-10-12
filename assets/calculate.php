<?php
function fibonacci($n) {
    if ($n <= 1) return $n;
    return fibonacci($n - 1) + fibonacci($n - 2);
}

function factorial($n) {
    if ($n <= 1) return 1;
    return $n * factorial($n - 1);
}

function sumVectors($vectorA, $vectorB) {
    if (count($vectorA) !== count($vectorB)) {
        return "Os vetores devem ter o mesmo tamanho.";
    }
    
    $result = [];
    for ($i = 0; $i < count($vectorA); $i++) {
        $result[] = $vectorA[$i] + $vectorB[$i];
    }
    return json_encode($result);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    switch ($action) {
        case 'fibonacci':
            $number = intval($_POST['number']);
            $result = fibonacci($number);
            echo "Fibonacci($number) = $result";
            break;

        case 'factorial':
            $number = intval($_POST['number']);
            $result = factorial($number);
            echo "Fatorial($number) = $result";
            break;

        case 'vectors':
            $vectorA = json_decode($_POST['vectorA']);
            $vectorB = json_decode($_POST['vectorB']);
            $result = sumVectors($vectorA, $vectorB);
            echo "Soma dos Vetores: $result";
            break;

        default:
            echo "Ação inválida.";
            break;
    }
}
?>
