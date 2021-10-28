<?php

namespace Monaye\NovaProfileResourceTools;

use Laravel\Nova\ResourceTool;

class NovaDeleteAccountTools extends ResourceTool
{

    public function __construct()
    {
        parent::__construct();

        $this->withMeta([
            'app_url' => config('app.url'),
        ]);
    }


    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Nova Delete Account Tools';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-delete-account-tools';
    }

    // public function email($email)
    // {
    //     // dd($user);
    //     return $this->withMeta([
    //         'email' => $email
    //     ]);
    // }

    // public function name_user($name)
    // {
    //     // dd($user);
    //     return $this->withMeta([
    //         'name' => $name
    //     ]);
    // }
}
