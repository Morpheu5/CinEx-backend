<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Dotenv\Dotenv;

define('LARAVEL_START', microtime(true));

/**
 * Layout:
 * - public_html/index.php
 * - ../cinex/.env
 * - ../cinex/{app,bootstrap,config,storage,vendor}
 */

$defaultBase = realpath(__DIR__ . '/..') ?: (__DIR__ . '/..');
$prodBase    = realpath(__DIR__ . '/../cinex') ?: (__DIR__ . '/../cinex');

$looksLikeLaravel = static function (string $base): bool {
    return is_file($base . '/vendor/autoload.php')
        && is_file($base . '/bootstrap/app.php');
};

// Prefer ../cinex if it looks like a Laravel install
$basePath = $looksLikeLaravel($prodBase) ? $prodBase : $defaultBase;

/**
 * Load .env manually (shared hosting safe)
 */
if (is_file($basePath . '/.env')) {
    // Composer autoload needed for phpdotenv
    require_once $basePath . '/vendor/autoload.php';

    Dotenv::createImmutable($basePath)->safeLoad();
}

// Maintenance mode
if (file_exists($maintenance = $basePath . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Bootstrap Laravel
/** @var Application $app */
$app = require_once $basePath . '/bootstrap/app.php';

$app->handleRequest(Request::capture());
