<?php

use Monaye\NovaProfileResourceTools\Controllers\NovaProfileResourceToolsController;

return [
    'handleInformationUpdate' => [NovaProfileResourceToolsController::class, 'updateInformation'],
    'handlePasswordUpdate' => [NovaProfileResourceToolsController::class, 'updatePassword'],
    'handleDeleteAccount' => [NovaProfileResourceToolsController::class, 'deleteAccount'],
];
