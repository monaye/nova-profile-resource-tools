<?php

namespace Monaye\NovaProfileResourceTools;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class ToolServiceProvider extends ServiceProvider
{

    public static $slug = 'nova-profile-resource-tools';
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });


        $this->publishes([
            __DIR__ . '/../config/' . self::$slug . '.php' => config_path(self::$slug . '.php'),
        ], self::$slug);

        Nova::serving(function (ServingNova $event) {
            Nova::script(self::$slug, __DIR__ . '/../dist/js/tool.js');
            Nova::style(self::$slug, __DIR__ . '/../dist/css/tool.css');
        });
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
            ->prefix('nova-vendor/' . self::$slug)
            ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->mergeConfigFrom(
            __DIR__ . '/../config/' . self::$slug . '.php',
            self::$slug
        );
    }
}
