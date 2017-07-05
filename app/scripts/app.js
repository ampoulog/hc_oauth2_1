'use strict';

/**
 * @ngdoc overview
 * @name angularJsApp
 * @description
 * # angularJsApp
 *
 * Main module of the application.
 */

//Configuration parameters
var basic_uri = 'https://developer.home-connect.com/api/homeappliances/'
var language = 'en-US'
var bear = 'Bearer 477904A0AA296D52CE2124EF8875D5682160BE42C6C01DFAD6E441BA358A1D99'
var accept = 'application/vnd.bsh.sdk.v1+json'
var coffee_maker_id ='BOSCH-HCS06COM1-3FE471C6A2ADF5'
var dishwasher_id ='SIEMENS-HCS02DWH1-B05B882976C6EC'
var dryer_id = 'BOSCH-HCS04DYR1-541ABBE7D4AFC2'
var fridge_freezer_id = 'SIEMENS-HCS05FRF1-280A00017A1421'
var oven_id = 'BOSCH-HCS01OVN1-D6E50F52BAB07C'
var washer_id = 'SIEMENS-HCS03WCH1-E4570A9653D1E4'

var active_program ='/programs/active'
var available_programs='/programs/available'
var available_settings='/settings'
var power_state = '/settings/BSH.Common.Setting.PowerState'
var selected_program = '/programs/selected'
var selected_option='/programs/selected/options'
var progress ='/programs/active/options/BSH.Common.Option.ProgramProgress'
var remaining_time='/programs/active/options/BSH.Common.Option.RemainingProgramTime'
var door_state='/status/BSH.Common.Status.DoorState'
var operation_state='/status/BSH.Common.Status.OperationState'
var remote_control_active='/status/BSH.Common.Status.RemoteControlActive'	
var remote_control_start_allowed='/status/BSH.Common.Status.RemoteControlStartAllowed'
var start_in_relative='/programs/active/options/BSH.Common.Option.StartInRelative'
var status = '/status'
var duration ='/programs/active/options/BSH.Common.Option.Duration'
var elapse_time ='/programs/active/options/BSH.Common.Option.ElapsedProgramTime'
var set_point_temperature='/programs/active/options/Cooking.Oven.Option.SetpointTemperature'
var spin_speed ='/programs/selected/options/LaundryCare.Washer.Option.SpinSpeed'
var washer_temperature='/programs/selected/options/LaundryCare.Washer.Option.Temperature'
var coffee_tempearture='/programs/active/options/ConsumerProducts.CoffeeMaker.Option.CoffeeTemperature'
var coffee_quantity='/programs/active/options/ConsumerProducts.CoffeeMaker.Option.FillQuantity'
var bean_amount='/programs/active/options/ConsumerProducts.CoffeeMaker.Option.BeanAmount'

	
angular
  .module('angularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngStorage',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'pouchdb'
  ])
  .service('service', function(pouchDB) {
	  var db = pouchDB('http://localhost:9000/#!/hc_db');
  })
  .config(function ($routeProvider, $qProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/identify',{
    	templateUrl: 'views/identify.html',
    	controller: 'IdentifyApplianceController'
      })
      .when('/coffee_maker/active_program',{
    	 templateUrl: 'views/coffee_maker/active_programme.html', 
    	 controller: 'CoffeeMakerActiveProgrammController'
      })
      .when('/oven/active_program',{
    	 templateUrl: 'views/oven/active_programme.html', 
    	 controller: 'OvenActiveProgrammController'
      })
      .when('/dishwasher/active_program',{
    	 templateUrl: 'views/dishwasher/active_programme.html', 
    	 controller: 'DishwaherProgrammController'
      })
      .when('/dryer/active_program',{
    	  templateUrl: 'views/dryer/active_programme.html', 
    	  controller: 'DryerProgrammController'
      })
      .when('/fridge_freezer/active_program',{
    	  templateUrl: 'views/fridge_freezer/active_programme.html', 
     	  controller: 'DryerProgrammController'
      })
      .when('/washer/active_program',{
    	  templateUrl: 'views/washer/active_programme.html', 
     	  controller: 'WasherProgrammController'
      })
      .when('/coffee_maker/selected_program',{
    	  templateUrl: 'views/coffee_maker/selected_programme.html', 
     	  controller: 'CoffeeMakerSelectedProgrammController'
      })
      .when('/dryer/selected_program',{
    	  templateUrl: 'views/dryer/selected_programme.html', 
     	  controller: 'DryerSelectedProgrammController'
      })
      .when('/dishwasher/selected_program',{
    	  templateUrl: 'views/dishwasher/selected_programme.html', 
     	  controller: 'DishwaherSelectedProgrammController'
      })
      .when('/fridge_freezer/selected_program',{
    	  templateUrl: 'views/fridge_freezer/selected_programme.html', 
     	  controller: 'FridgeFreezerSelectedProgrammController'
      })
      .when('/oven/selected_program',{
    	  templateUrl: 'views/oven/selected_programme.html', 
     	  controller: 'OvenSelectedProgrammController'
      })
      .when('/washer/selected_program',{
    	  templateUrl: 'views/washer/selected_programme.html', 
     	  controller: 'WasherSelectedProgrammController'
      })
      .when('/coffee_maker/selected_options',{
    	  templateUrl: 'views/coffee_maker/selected_options.html', 
     	  controller: 'CoffeeMakerSelectedOptionsController' 
      })
      .when('/dishwasher/selected_options',{
    	  templateUrl: 'views/dishwasher/selected_options.html', 
     	  controller: 'DishwasherSelectedOptionsController' 
      })
      .when('/dryer/selected_options',{
    	  templateUrl: 'views/dryer/selected_options.html', 
     	  controller: 'DryerSelectedOptionsController' 
      })
      .when('/fridge_freezer/selected_options',{
    	  templateUrl: 'views/fridge_freezer/selected_options.html', 
     	  controller: 'FridgeFreezerSelectedOptionsController' 
      })
      .when('/oven/selected_options',{
    	  templateUrl: 'views/oven/selected_options.html', 
     	  controller: 'OvenSelectedOptionsController' 
      })
      .when('/washer/selected_options',{
    	  templateUrl: 'views/washer/selected_options.html', 
     	  controller: 'WasherSelectedOptionsController' 
      })
      .when('/coffee_maker/available_program',{
    	  templateUrl: 'views/coffee_maker/available_programme.html',
    	  controller: 'CoffeeMakerAvailableProgrammController'
      })
      .when('/dishwasher/available_program',{
    	  templateUrl: 'views/dishwasher/available_programme.html',
    	  controller: 'DishwasherAvailableProgrammController'
      })
      .when('/dryer/available_program',{
    	  templateUrl: 'views/dryer/available_programme.html',
    	  controller: 'DryerAvailableProgrammController'
      })
      .when('/oven/available_program',{
    	  templateUrl: 'views/oven/available_programme.html',
    	  controller: 'OvenAvailableProgrammController'
      })
      .when('/washer/available_program',{
    	  templateUrl: 'views/washer/available_programme.html',
    	  controller: 'WasherAvailableProgrammController'
      })
      .when('/coffee_maker/available_settings',{
    	  templateUrl: 'views/coffee_maker/available_settings.html',
    	  controller: 'CoffeeMakerAvailableSettingsController'
      })
      .when('/dishwasher/available_settings',{
    	  templateUrl: 'views/dishwasher/available_settings.html',
    	  controller: 'DishwasherAvailableSettingsController'
      })
      .when('/dryer/available_settings',{
    	  templateUrl: 'views/dryer/available_settings.html',
    	  controller: 'DryerAvailableSettingsController'
      })
      .when('/fridge_freezer/available_settings',{
    	  templateUrl: 'views/fridge_freezer/available_settings.html',
    	  controller: 'FridgeFreezerAvailableSettingsController'
      })
      .when('/oven/available_settings',{
    	  templateUrl: 'views/oven/available_settings.html',
    	  controller: 'OvenAvailableSettingsController'
      })
      .when('/washer/available_settings',{
    	  templateUrl: 'views/washer/available_settings.html',
    	  controller: 'WasherAvailableSettingsController'
      })
      .when('/coffee_maker/power_state',{
    	  templateUrl: 'views/coffee_maker/power_state.html',
    	  controller: 'CoffeeMakerPowerStateController'
      })
      .when('/dishwasher/power_state',{
    	  templateUrl: 'views/dishwasher/power_state.html',
    	  controller: 'DishwasherPowerStateController'
      })
      .when('/dryer/power_state',{
    	  templateUrl: 'views/dryer/power_state.html',
    	  controller: 'DryerPowerStateController'
      })
      .when('/fridge_freezer/power_state',{
    	  templateUrl: 'views/fridge_freezer/power_state.html',
    	  controller: 'FridgeFreezerPowerStateController'
      })
      .when('/oven/power_state',{
    	  templateUrl: 'views/oven/power_state.html',
    	  controller: 'OvenPowerStateController'
      })
      .when('/washer/power_state',{
    	  templateUrl: 'views/washer/power_state.html',
    	  controller: 'WasherPowerStateController'
      })
      .when('/oven/set_point_temperature',{
    	  templateUrl: 'views/oven/set_point_temperature.html',
    	  controller: 'OvenSetPointTemperatureController'
      })
      .when('/oven/duration',{
    	  templateUrl: 'views/oven/duration.html',
    	  controller: 'OvenDurationController'
      })
      .when('/oven/elapse_program_time',{
    	  templateUrl: 'views/oven/elapse_program_time.html',
    	  controller: 'OvenElapseProgramTimeController'
      })
      .when('/oven/remaining_program_time',{
    	  templateUrl: 'views/oven/remaining_program_time.html',
    	  controller: 'OvenRemainingProgramTimeController'
      })
      .when('/oven/program_progress',{
    	  templateUrl: 'views/oven/program_progress.html',
    	  controller: 'OvenProgramProgressController'
      })
      .when('/dishwasher/remaining_program_time',{
    	  templateUrl: 'views/oven/remaining_program_time.html',
    	  controller: 'DishwasherRemainingProgramTimeController'
      })
      .when('/dishwasher/program_progress',{
    	  templateUrl: 'views/dishwasher/program_progress.html',
    	  controller: 'DishwasherProgramProgressController'	  
      })
      .when('/dishwasher/start_in_relative',{
    	  templateUrl: 'views/dishwasher/start_in_relative.html',
    	  controller: 'DishwaherStartInRelativeController'	  
      })
      .when('/dishwasher/status',{
    	  templateUrl: 'views/dishwasher/status.html',
    	  controller: 'DishwaherStatusController'
      })
      .when('/dishwasher/operation_state',{
    	  templateUrl: 'views/dishwasher/operation_state.html',
    	  controller: 'DishwasherOperationStateController'
      })
      .when('/dishwasher/door_state',{
    	  templateUrl: 'views/dishwasher/door_state.html',
    	  controller: 'DishwasherDoorStateController'
      })
      .when('/dishwasher/remote_control_active',{
    	  templateUrl: 'views/dishwasher/remote_control_active.html',
    	  controller: 'DishwasherRemoteControlActiveController'
      })
      .when('/dishwasher/remote_control_start_allowed',{
    	  templateUrl: 'views/dishwasher/remote_control_start_allowed.html',
    	  controller: 'DishwasherRemoteControlStartAllowedController'
      })
      .when('/fridge_freezer/door_state',{
    	  templateUrl: 'views/fridge_freezer/door_state.html',
    	  controller: 'FridgeFreezerDoorStateController'
      })
      .when('/washer/temperature',{
    	  templateUrl: 'views/washer/temperature.html',
    	  controller: 'WasherTemperatureController'
      })
      .when('/washer/spin_speed',{
    	  templateUrl: 'views/washer/spin_speed.html',
    	  controller: 'WasherSpinSpeedController'
      })
      .when('/washer/status',{
    	  templateUrl: 'views/washer/status.html',
    	  controller: 'WasherStatusController'
      })
      .when('/washer/door_state',{
    	  templateUrl: 'views/washer/door_state.html',
    	  controller: 'WasherDoorStateController'
      })
      .when('/washer/remote_control_active',{
    	  templateUrl: 'views/washer/remote_control_active.html',
    	  controller: 'WasherRemoteControlActiveController'
      })
      .when('/washer/remote_control_start_allowed',{
    	  templateUrl: 'views/washer/remote_control_start_allowed.html',
    	  controller: 'WasherRemoteControlStartAllowedController'
      })
      .when('/washer/operation_state',{
    	  templateUrl: 'views/washer/operation_state.html',
    	  controller: 'WasherOperationStateController'
      })
      .when('/dryer/remaining_program_time',{
    	  templateUrl: 'views/dryer/remaining_program_time.html',
    	  controller: 'DryerRemainingProgramTimeController'
      })
      .when('/dryer/program_progress',{
    	  templateUrl: 'views/dryer/program_progress.html',
    	  controller: 'DryerProgramProgressController'
      })
      .when('/dryer/status',{
    	  templateUrl: 'views/dryer/status.html',
    	  controller: 'DryerStatusController'
      })
      .when('/dryer/door_state',{
    	  templateUrl: 'views/dryer/door_state.html',
    	  controller: 'DryerDoorStateController'
      })
      .when('/dryer/remote_control_active',{
    	  templateUrl: 'views/dryer/remote_control_active.html',
    	  controller: 'DryerRemoteControlActiveController'
      })
      .when('/dryer/remote_control_start_allowed',{
    	  templateUrl: 'views/dryer/remote_control_start_allowed.html',
    	  controller: 'DryerRemoteControlStartAllowedController'
      })
      .when('/dryer/operation_state',{
    	  templateUrl: 'views/dryer/operation_state.html',
    	  controller: 'DryerOperationStateController'
      })
      .when('/coffee_maker/coffee_temperature',{
    	  templateUrl: 'views/coffee_maker/coffee_temperature.html',
    	  controller: 'CoffeeTemperatureController'
      })
      .when('/coffee_maker/fill_quantity',{
    	  templateUrl: 'views/coffee_maker/fill_quantity.html',
    	  controller: 'CoffeeMakerFillQuantityController'
      })
      .when('/coffee_maker/bean_amount',{
    	  templateUrl: 'views/coffee_maker/bean_amount.html',
    	  controller: 'CoffeeMakerBeanAmountController'	  
      })
      .when('/coffee_maker/progress',{
    	  templateUrl: 'views/coffee_maker/progress.html',
    	  controller: 'CoffeeMakerProgressController'	  
      })
      .when('/coffee_maker/remaining_program_time',{
    	  templateUrl: 'views/coffee_maker/remaining_program_time.html',
    	  controller: 'CoffeeMakerRemainingTimeController'	  
      })
      .when('/test',{
    	  templateUrl: 'views/test.html'
    	
      })
      .otherwise({
        redirectTo: '/'
      });
    $qProvider.errorOnUnhandledRejections(false);
  })
  .controller('AppCtrl', function ($rootScope) {
    $rootScope.authData = {
      authorization_url: "https://developer.home-connect.com/security/oauth/authorize",
      token_url: "https://developer.home-connect.com/security/oauth/token",
      client_id: "3253080632BF41CDA3443AE92F8EB83296171D7C5846DC6AA911681279CA8F60",
      redirect_url: "http://localhost:9000/#!/about",
      scope: "IdentifyAppliance"
    }
    
  });

