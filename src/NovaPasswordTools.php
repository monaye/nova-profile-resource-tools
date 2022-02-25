<?php

namespace Monaye\NovaProfileResourceTools;

use Laravel\Nova\ResourceTool;

class NovaPasswordTools extends ResourceTool
{
    public function __construct($title)
    {
        parent::__construct();
        $this->withMeta(['title' => $title]);
    }
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Nova Password Tools';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-password-tools';
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
