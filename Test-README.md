# Test 1
This test is designed to test your proficiency in the basics for most of what we do at Blueprint. 

## Project Requirements:
1. use React to create a table with the columns: Campaign, Adset, Creative, Spend, Impressions, Clicks, Results
2. use the data in the fakeDataSet from the provided API to populate the table with standardized data
3. the table should be sortable by at least one column
4. the table should be searchable by at least one column

Bonus points for using TypeScript and TailwindCSS
Please make this a github project and then send us the link to the github project when you are done for us to fork and run locally to test the code

### Background Information
an ad is a unique combination of a campaign, adset, and creative, different platforms may call them different names and part of what Blueprint does is standardize the names across platforms so that we can compare the data across platforms.
campaign is called campaign_name in facebook, campaign in twitter, campaign_name in snapchat, utm_campaign in google analytics,
adset is called media_buy_name in facebook, ad_group in twitter, ad_squad_name in snapchat, utm_medium in google analytics
creative is called ad_name in facebook, image_name in twitter, creative_name in snapchat, utm_content in google analytics
different platforms also dont name all of their metrics the same either, so we have to standardize those as well
spend === cost
clicks === post_clicks
google analytics doesnt contain metrics like spend, clicks or impressions. it is where we get results from and have to allocate them to the ads that come from the platforms
meaning that you will have to put the results that come from google analytics into the correct ad from the platform

# Test 2
This test is designed to test your ability to read and debug code others have written. 

have a barebones 'promo-code-ad' creation mechanism that takes dates, spend and promo code string

<!-- have dates be noninclusive
have one scenario be a user error and ask how they would respond to the client
 -->




<!-- dont include this in the actual read me -->
interface fakeDataSet {
  facebook_ads: [
    {
      campaign_name: string;
      media_buy_name: string;
      ad_name: string;
      spend: number;
      impressions: number;
      clicks: number;
      date: Date;
    }
  ];
  twitter_ads: [
    {
      campaign: string;
      ad_group: string;
      image_name: string;
      spend: number;
      impressions: number;
      post_clicks: number;
      date: Date;
    }
  ];
  snapchat_ads: [
    {
      campaign_name: string;
      ad_squad_name: string;
      creative_name: string;
      cost: number;
      impressions: number;
      post_clicks: number;
      date: Date;
    }
  ];
  google_analytics: [
    {
      utm_campaign: string;
      utm_medium: string;
      utm_content: string;
      results: number;
      date: Date;
    }
  ];
}


