import puppeteer from 'puppeteer';
import { mockData } from '../mock-data';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      jest.setTimeout(30000);
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/', {
          waitUntil: 'load',
          timeout: 30000
      });
      await page.waitForSelector('.event');
    });
  
    afterAll(() => {
      browser.close();
    });
  
    test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event .eventDescription');
      expect(eventDetails).toBeNull();
    });
  
    test('User can expand an event to see its details', async () => {
      await page.click('.event .details-btn');
      const eventDetails = await page.$('.event .eventDescription');
      expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .hideDetailsButton');
        const eventDetails = await page.$('.event .eventDescription');
        expect(eventDetails).toBeNull();
      });

  });
  
  describe('filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
      jest.setTimeout(30000);
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/', {
          waitUntil: 'load',
          timeout: 30000
      });
      await page.waitForSelector('.event');
    });
  
    afterAll(() => {
      browser.close();
    });
  
    test('show upcoming events from all cities', async () => {
      const eventsShown = await page.$('.citySearch .event');
      expect(eventsShown).toBeDefined();
    });

    test('User should see a list of suggestions when they search for a city', async () => {
        await page.type('.city', 'London');
        const eventsShown = await page.$('.citySearch .event .suggestions');
        expect(eventsShown).toBeDefined();
      });
  });