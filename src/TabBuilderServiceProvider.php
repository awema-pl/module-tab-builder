<?php

namespace AwemaPL\TabBuilder;

use AwemaPL\BaseJS\AwemaProvider;

class TabBuilderServiceProvider extends AwemaProvider
{

    public function getPackageName(): string
    {
        return 'tab-builder';
    }

    public function getPath(): string
    {
        return __DIR__;
    }
}
