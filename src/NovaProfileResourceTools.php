<?php

namespace Monaye\NovaProfileResourceTools;

use Laravel\Nova\ResourceTool;

class NovaProfileResourceTools extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Nova Profile Resource Tools';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-profile-resource-tools';
    }
}
