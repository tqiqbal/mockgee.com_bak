<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h1 class="title is-size-3 has-text-dark has-text-weight-medium">mockgee</h1>
                <!-- <img
                    src="https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/logo.png"
                    alt="MS Office generated logo"
                > -->
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/documenation' }">
                Documentation
            </b-navbar-item>
             <b-navbar-dropdown label="Product">
                <b-navbar-item href="#">
                    Mockgee Community Edtion
                </b-navbar-item>
                <b-navbar-item href="#">
                    Mockgee Enterprise
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Info">
                <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                    About
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item>
                <a href="https://github.com/mockgee/mockgee" target="_blank">
                <i class="fab fa-github fa-lg has-text-dark"></i>
                </a>
            </b-navbar-item>
            <b-navbar-item>
                <span class="has-text-info" style="font-size: 0.9em;">Version: 0.1.0</span>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>