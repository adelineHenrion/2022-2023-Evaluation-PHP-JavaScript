<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use app\core\Application;
use app\controllers\SiteController;
use app\controllers\AuthController;

$app = new Application(dirname(__DIR__));


$app->router-> get('/', [SiteController::class, 'home']);

$app -> run();
