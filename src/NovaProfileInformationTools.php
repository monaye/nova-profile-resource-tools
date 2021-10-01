<?php

namespace Monaye\NovaProfileResourceTools;

use Laravel\Nova\ResourceTool;

class NovaProfileInformationTools extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Nova Profile Information Tools';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-profile-information-tools';
    }

    public function email($email)
    {
        // dd($user);
        return $this->withMeta([
            'email' => $email
        ]);
    }

    public function name_user($name)
    {
        // dd($user);
        return $this->withMeta([
            'name' => $name
        ]);
    }
}
