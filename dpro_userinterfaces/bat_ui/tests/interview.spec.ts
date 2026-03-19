import { test, expect } from '@playwright/test';

test('analysis', async ({ page }) => {
  //await page.locator('body').click();
  test.setTimeout(320_000);
  await page.goto('http://localhost:4000/');

  //Business
  await page.getByRole('checkbox').check();
  await page.getByRole('textbox', { name: 'add business name' }).click();
  await page.getByRole('textbox', { name: 'add business name' }).fill('Business 1');
  await page.getByRole('textbox', { name: 'add business description' }).click();
  await page.getByRole('textbox', { name: 'add business description' }).fill('Business Description 1');
  await page.getByRole('textbox', { name: 'add business contact' }).click();
  await page.getByRole('textbox', { name: 'add business contact' }).fill('Business Contact 1');
  await page.getByRole('textbox', { name: 'add business phone' }).click();
  await page.getByRole('textbox', { name: 'add business phone' }).fill('Business Phone 1');
  await page.getByRole('textbox', { name: 'city' }).click();
  await page.getByRole('textbox', { name: 'city' }).fill('City 1');
  await page.getByRole('textbox', { name: 'state' }).click();
  await page.getByRole('textbox', { name: 'state' }).fill('State 1');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Complete: Next Page' }).click();
  await page.getByRole('button', { name: 'Complete' }).click();

  //Workflow
  await page.getByText('Got Processes? Now begin a research interview. Process Info Process: 1 Actions').click();
  await page.locator('input[name="Process Name 1"]').click();
  await page.locator('input[name="Process Name 1"]').fill('process 1');
  await page.locator('textarea[name="Process Description 1"]').click();
  await page.locator('textarea[name="Process Description 1"]').fill('process description 1');
  await page.locator('input[name="Data 1"]').check();
  await page.locator('input[name="Meeting 1"]').check();
  await page.locator('input[name="Process Name 2"]').click();
  await page.locator('input[name="Process Name 2"]').fill('process 2');
  await page.locator('textarea[name="Process Description 2"]').click();
  await page.locator('textarea[name="Process Description 2"]').fill('process description 2');
  await page.getByText('data').nth(1).click();
  await page.locator('input[name="Data 2"]').check();
  await page.locator('input[name="Process Name 3"]').click();
  await page.locator('input[name="Process Name 3"]').fill('process 3');
  await page.locator('textarea[name="Process Description 3"]').click();
  await page.locator('textarea[name="Process Description 3"]').fill('process description 3');
  await page.getByText('data').nth(2).click();
  await page.locator('input[name="Data 3"]').check();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Complete' }).click();
  await page.locator('button[name="Complete"]').click();

  //Interview
  await page.getByRole('textbox', { name: 'Name for analysis' }).click();
  await page.getByRole('textbox', { name: 'Name for analysis' }).fill('Analysis 1');
  await page.getByRole('textbox', { name: 'Workflow Document Id' }).click();
  await page.getByRole('textbox', { name: 'Workflow Document Id' }).fill('Document 1');
  await page.getByRole('textbox', { name: 'Requestor' }).click();
  await page.getByRole('textbox', { name: 'Requestor' }).fill('Requestor 1');
  await page.getByRole('textbox', { name: 'Analyst' }).click();
  await page.getByRole('textbox', { name: 'Analyst' }).fill('Analyst 1');
  await page.getByRole('textbox', { name: 'Analysis Description' }).click();
  await page.getByRole('textbox', { name: 'Analysis Description' }).fill('Description 1');
  await page.getByRole('textbox', { name: 'Problem Name' }).click();
  await page.getByRole('textbox', { name: 'Problem Name' }).fill('Problem 1');
  await page.getByRole('textbox', { name: 'Problem Description' }).click();
  await page.getByRole('textbox', { name: 'Problem Description' }).fill('Problem Description 1');
  await page.locator('input[name="Suggestion2"]').click();
  await page.locator('input[name="Suggestion2"]').fill('Suggestion 1');
  await page.locator('input[name="Suggestion3"]').click();
  await page.locator('input[name="Suggestion3"]').fill('Suggestion 2');
  await page.getByRole('textbox', { name: 'Solution Name' }).click();
  await page.getByRole('textbox', { name: 'Solution Name' }).fill('Solution 1');
  await page.getByRole('textbox', { name: 'Analysis Document Id' }).click();
  await page.getByRole('textbox', { name: 'Analysis Document Id' }).fill('Document 2');
  await page.getByRole('textbox', { name: 'Problem Document' }).click();
  await page.getByRole('textbox', { name: 'Problem Document' }).fill('Document 3');
  await page.getByRole('textbox', { name: 'Solution Description' }).click();
  await page.getByRole('textbox', { name: 'Solution Description' }).fill('Solution Description 1');
  await page.getByRole('heading', { name: 'Welcome to the Business' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Business' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Create Analysis' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Create Analysis' }).click();

  //Intake
  await expect(page.getByRole('radio', { name: 'analyst' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('radio', { name: 'analyst' }).click();
  await expect(page.getByRole('heading', { name: 'Analyst Selection' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Analyst 1');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('Test@Test.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('000-000-0000');
  await page.locator('input[name="Analysis Interview Availability"]').click();
  await page.locator('input[name="Analysis Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Discovery Interview Availability"]').click();
  await page.locator('input[name="Discovery Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Review Interview Availability"]').click();
  await page.locator('input[name="Review Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Solutions Interview Availability"]').click();
  await page.locator('input[name="Solutions Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Requirements Interview Availability"]').click();
  await page.locator('input[name="Requirements Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Retrospective Interview Availability"]').click();
  await page.locator('input[name="Retrospective Interview Availability"]').fill('2026-01-01T00:00');
  await expect(page.getByRole('button', { name: 'Add Analyst' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Add Analyst' }).click();

  //Schedule
  await expect(page.getByRole('radio', { name: 'schedule' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('radio', { name: 'schedule' }).click();
  await expect(page.getByRole('heading', { name: 'Scheduler' })).toBeVisible();
  await page.locator('input[name="Analysis Interview Availability"]').click();
  await page.locator('input[name="Analysis Interview Availability"]').press('ArrowRight');
  await page.locator('input[name="Analysis Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Discovery Interview Availability"]').click();
  await page.locator('input[name="Discovery Interview Availability"]').press('ArrowRight');
  await page.locator('input[name="Discovery Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Review Interview Availability"]').click();
  await page.locator('input[name="Review Interview Availability"]').press('ArrowRight');
  await page.locator('input[name="Review Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Solutions Interview Availability"]').click();
  await page.locator('input[name="Solutions Interview Availability"]').press('ArrowRight');
  await page.locator('input[name="Solutions Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Requirements Interview Availability"]').click();
  await page.locator('input[name="Requirements Interview Availability"]').press('ArrowRight');
  await page.locator('input[name="Requirements Interview Availability"]').fill('2026-01-01T00:00');
  await page.locator('input[name="Retrospective Interview Availability"]').click();
  await page.locator('input[name="Retrospective Interview Availability"]').press('ArrowRight');
  await page.locator('input[name="Retrospective Interview Availability"]').fill('2026-01-01T00:00');
  await expect(page.getByRole('button', { name: 'Schedule' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Schedule' }).click();

  //Interview
  await expect(page.getByRole('radio', { name: 'interview' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('radio', { name: 'interview' }).click();
  await page.getByRole('textbox', { name: 'Interview Name' }).click();
  await page.getByRole('textbox', { name: 'Interview Name' }).fill('Interview 1');
  await page.getByRole('textbox', { name: 'Description' }).fill('Decscription 1');
  await page.locator('[id="Attendee Ids"]').selectOption('0');
  await page.getByLabel('Select the most recent tech').selectOption('design');
  await page.getByRole('textbox', { name: 'Describe problems or issues' }).click();
  await page.getByRole('textbox', { name: 'Describe problems or issues' }).fill('Problem 1');
  await page.getByRole('textbox', { name: 'Describe the current solution' }).click();
  await page.getByRole('textbox', { name: 'Describe the current solution' }).fill('Solution 1');
  await page.getByRole('textbox', { name: 'Describe the ideal solution' }).click();
  await page.getByRole('textbox', { name: 'Describe the ideal solution' }).fill('Solution 2');
  await page.getByRole('textbox', { name: 'Describe obstacles or blockers' }).click();
  await page.getByRole('textbox', { name: 'Describe obstacles or blockers' }).fill('Blockers 1');
  await page.getByRole('textbox', { name: 'Does the solution require' }).click();
  await page.getByRole('textbox', { name: 'Does the solution require' }).fill('Integrations 1');
  await page.getByRole('textbox', { name: 'Are their usability issues?' }).click();
  await page.getByRole('textbox', { name: 'Are their usability issues?' }).fill('Issue 1');
  await page.getByRole('textbox', { name: 'Does the solution require' }).click();
  await page.getByRole('textbox', { name: 'Does the solution require' }).fill('Integration 1');
  await page.getByRole('textbox', { name: 'Describe obstacles or blockers' }).click();
  await page.getByRole('textbox', { name: 'Describe obstacles or blockers' }).fill('Blocker 1');
  await page.getByRole('textbox', { name: 'Is the performance lagging?' }).click();
  await page.getByRole('textbox', { name: 'Is the performance lagging?' }).fill('Perf 1');
  await page.getByRole('textbox', { name: 'Do features have required' }).click();
  await page.getByRole('textbox', { name: 'Do features have required' }).fill('Feature 1');
  await page.getByRole('textbox', { name: 'How is the customer support' }).click();
  await page.getByRole('textbox', { name: 'How is the customer support' }).fill('Support Improvement 1');
  await page.getByRole('textbox', { name: 'How is the customer support' }).click();
  await page.getByRole('textbox', { name: 'How is the customer support' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'How is the customer support' }).fill('');
  await page.getByRole('textbox', { name: 'How is the customer support' }).click();
  await page.getByRole('textbox', { name: 'How is the customer support' }).fill('Support 1');
  await page.getByRole('textbox', { name: 'Current improvements' }).click();
  await page.getByRole('textbox', { name: 'Current improvements' }).fill('Improvement 1');
  await page.getByRole('textbox', { name: 'Number of similar issues' }).click();
  await page.getByRole('textbox', { name: 'Number of similar issues' }).fill('0');
  await page.getByRole('textbox', { name: 'Metrics for measuring success' }).click();
  await page.getByRole('textbox', { name: 'Metrics for measuring success' }).fill('Metric 1');
  await page.getByRole('textbox', { name: 'Competing products or services' }).click();
  await page.getByRole('textbox', { name: 'Competing products or services' }).fill('Service 1');
  await expect(page.getByRole('button', { name: 'Add interview' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Add interview' }).click();

  //Review
  await expect(page.getByRole('radio', { name: 'review' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('radio', { name: 'review' }).click();
  await expect(page.getByText('Review process for existing')).toBeVisible();
  await page.getByRole('textbox', { name: 'What are the infrastructure' }).click();
  await page.getByRole('textbox', { name: 'What are the infrastructure' }).fill('Infra 1');
  await page.getByRole('textbox', { name: 'Describe the applicapable' }).click();
  await page.getByRole('textbox', { name: 'Describe the applicapable' }).fill('Architect 1');
  await page.getByRole('textbox', { name: 'Describe the recommended' }).click();
  await page.getByRole('textbox', { name: 'Describe the recommended' }).fill('Service 1');
  await page.getByRole('textbox', { name: 'What are the functional' }).click();
  await page.getByRole('textbox', { name: 'What are the functional' }).fill('Requirement 1');
  await page.getByRole('textbox', { name: 'List the goals for the' }).click();
  await page.getByRole('textbox', { name: 'List the goals for the' }).fill('Goal 1');
  await page.getByRole('radio').nth(5).check();
  await expect(page.getByRole('button', { name: 'Complete' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Complete' }).click();
});