// src/core/database/testDatabase.ts

import { open } from 'react-native-quick-sqlite';

const db = open({
  name: 'finance_test.db',
  location: 'default',
});

type TestAccount = {
  id: string;
  name: string;
  currency: string;
  balance: number;
};

export function createTestTable() {
  db.execute(`
    CREATE TABLE IF NOT EXISTS test_accounts (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      currency TEXT NOT NULL,
      balance REAL NOT NULL
    );
  `);

  console.log('[DB TEST] Table created');
}

export function insertTestAccounts() {
  db.execute(
    `
    INSERT OR REPLACE INTO test_accounts (
      id,
      name,
      currency,
      balance
    ) VALUES (?, ?, ?, ?);
    `,
    ['acc_cash_ars', 'Cash pesos', 'ARS', 85000],
  );

  db.execute(
    `
      INSERT OR REPLACE INTO test_accounts (
      id,
      name,
      currency,
      balance
    ) VALUES (?, ?, ?, ?);
    `,
    ['acc_cash_usd', 'Cash dollars', 'USD', 340],
  );

  console.log('[DB TEST] Accounts inserted');
}

export function getTestAccounts(): TestAccount[] {
  const result = db.execute(`
    SELECT *
    FROM test_accounts
    ORDER BY name ASC;
  `);

  const accounts = result.rows?._array ?? [];

  console.log('[DB TEST] Accounts:', accounts);

  return accounts as TestAccount[];
}

export function runDatabaseTest() {
  try {
    console.log('[DB TEST] Starting test...');

    createTestTable();
    insertTestAccounts();

    const accounts = getTestAccounts();

    console.log('[DB TEST] Finished OK:', accounts);

    return accounts;
  } catch (error) {
    console.log('[DB TEST] Error:', error);
    throw error;
  }
}
