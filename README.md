## Nova Tippy Field
Laravel Nova Profile Resource Tools provide the 3 resource tools ([Resource Tools](https://nova.laravel.com/docs/3.0/customization/resource-tools.html)) 
  
1. NovaProfileInformationTools  
Provide a input fields and the default controller method to update the `name` and `email` fields in the `users` table.  
![profile-field](https://user-images.githubusercontent.com/1147313/155786027-6cacf9b2-4411-4148-a0e4-6a12f07902d1.png)


2. NovaPasswordTools  
Allow user to update the password. 
![profile-password](https://user-images.githubusercontent.com/1147313/155787851-0655c450-081a-4574-a1da-28243e15253f.png)

3. NovaDeleteAccountTools  
Provide the functionality to delete the user account by confirming existing current password.
![profile-delete-account](https://user-images.githubusercontent.com/1147313/155789189-c1f35ca9-6aa0-408e-88cc-74bee4881747.png)


  
### Installation

```bash
composer require monaye/nova-profile-resource-tools
```

This package rely on the full Tailwind and recommend using the `optimistdigital/nova-tailwind`.
```
composer require optimistdigital/nova-tailwind
``

### Usage

```php
use Monaye\NovaProfileResourceTools\NovaPasswordTools;
use Monaye\NovaProfileResourceTools\NovaDeleteAccountTools;
use Monaye\NovaProfileResourceTools\NovaProfileInformationTools;
```

```php
public function fields(Request $request)
{
    return [
        NovaProfileInformationTools::make('Update Profile')
            ->name_user($request->user()->name)
            ->email($request->user()->email),

        NovaPasswordTools::make('Change Password'),

        NovaDeleteAccountTools::make('Delete Account'),
    ];
}
```

---
## Configuring Controller
This package come with a default controller and methods to handle all 3 APIs call from the components. You could overwrite the controller@method to handle the API call instead of the shipped one.

To user your own controller@method, first publish the config file

```
php artisan vendor:publish
// choose Monaye\NovaProfileResourceTools\ToolServiceProvider 
```

Open the config file `config/nova-profile-resource-tools.php` and update.

```
<?php

use Monaye\NovaProfileResourceTools\Controllers\NovaProfileResourceToolsController;

return [
    'handleInformationUpdate' => [NovaProfileResourceToolsController::class, 'updateInformation'],
    'handlePasswordUpdate' => [NovaProfileResourceToolsController::class, 'updatePassword'],
    'handleDeleteAccount' => [NovaProfileResourceToolsController::class, 'deleteAccount'],
];

```

Hope you find it useful. Feel free to reach out with feedback.

Follow me on twitter: [@winmonaye](https://twitter.com/winmonaye)


## Screenshots

![profile-field-duplicate-validation](https://user-images.githubusercontent.com/1147313/155786021-55f2bc8f-223d-488f-8067-e03239db1925.png)
![profile-filed-name-validation](https://user-images.githubusercontent.com/1147313/155786026-2635e29b-07c5-4220-b9ac-fbee33d32386.png)
![profile-field](https://user-images.githubusercontent.com/1147313/155786027-6cacf9b2-4411-4148-a0e4-6a12f07902d1.png)
![profile-password-confirm-current](https://user-images.githubusercontent.com/1147313/155787819-128a4a86-1a20-49cc-a4a7-6442d3ce5094.png)
![profile-password-validation](https://user-images.githubusercontent.com/1147313/155787838-7e4c7aca-ff0f-4301-a5fe-379ba833d63b.png)
![profile-password](https://user-images.githubusercontent.com/1147313/155787851-0655c450-081a-4574-a1da-28243e15253f.png)
![profile-delete-validate-password](https://user-images.githubusercontent.com/1147313/155789163-a78c100c-4d66-4363-a8a7-04ac9badcf76.png)
![profile-delete-confirm](https://user-images.githubusercontent.com/1147313/155789179-cf0a301c-eceb-49a5-85b7-a798e2bc0856.png)
![profile-delete-account](https://user-images.githubusercontent.com/1147313/155789189-c1f35ca9-6aa0-408e-88cc-74bee4881747.png)
