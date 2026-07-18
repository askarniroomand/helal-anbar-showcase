# Case study: Helal Anbar (هلال‌انبار)

| Field | Value |
|:------|:------|
| Product | Enterprise warehouse management |
| Client domain | Red Crescent / relief inventory (Kohgiluyeh) |
| Role | Full-stack desktop engineer |
| Stack | Python · PySide6 · SQLite · PDF/Excel export · Jalali calendar |
| Source | Private (`helal-anbar`) |
| Public UI | https://askarniroomand.github.io/helal-anbar-showcase/ |

## Problem

Relief warehouses need reliable offline tracking of intake, issue vouchers, loans, depots, and stock alerts — often without depending on cloud connectivity.

## Goals

- Offline-first desktop application
- Persian RTL enterprise UX (light/dark)
- Official printable vouchers
- Role separation (IT admin vs storekeeper)
- Automatic backups

## Architecture

```text
PySide6 Views  →  ViewModels/Services  →  SQLite
                         ↓
              Reports (PDF/Excel) · Backup jobs
```

### Major domains
- Items & multi-warehouse stock
- Inbound receipts with attachments
- Outbound vouchers + print
- Loan / due / return flows
- Depot lock states
- Dashboard KPIs + low-stock alerts
- Monthly backup

## Engineering highlights

1. **Offline-first SQLite** — resilience over always-online web; trade-off is multi-site sync complexity.
2. **Role-aware UI** — reduces operator error; trade-off is more QA paths.
3. **Jalali everywhere** — local usability; trade-off is extra date layer testing.
4. **Portable packaging** — Windows portable builds for field machines.

## Security & privacy

- Private source repository
- Local DB stays on organization machines
- Default passwords documented only for first-run lab setups — must be rotated in production
- Showcase repo contains **no** production database

## Outcomes (qualitative)

- Digitized warehouse operations vs paper-heavy process
- Faster voucher issuance and inventory visibility
- Trainable UI for non-technical staff

## Public proof

- Showcase: https://github.com/askarniroomand/helal-anbar-showcase
- Demo: https://askarniroomand.github.io/helal-anbar-showcase/demo/

## Next improvements

- Automated UI tests
- Sync strategy if multi-branch warehouses appear
- Stronger first-run password generation (no shared defaults)
