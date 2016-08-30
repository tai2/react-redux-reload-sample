require('assets/stylesheets/base.scss');

if (module.hot) {
    module.hot.accept('assets/stylesheets/base.scss', function() {
        console.log('stylesheet accepted');
        require('assets/stylesheets/base.scss');
    });
}

