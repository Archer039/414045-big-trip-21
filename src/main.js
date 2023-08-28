import AppPresenter from './presenter/app-presenter';
import TripEventsModel from './model/trip-events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';

const tripEventModel = new TripEventsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const appPresenter = new AppPresenter({tripEventModel, destinationsModel, offersModel});

appPresenter.init();
