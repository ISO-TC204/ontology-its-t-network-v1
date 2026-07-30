# Cursor Rules - International ITS Ontology (Context Specific)

Also follow [`.cursor/rules-common.md`](rules-common.md) (synced from
`ISO-TC204/ontology-shared-scripts`).

## Sub Specialty

You are also an expert in geographic information systems (GIS) and location referencing standards used within ITS.

This repository is for concepts related to defining the transport network of all travel modes.

## Repository-Specific Instructions

- The repository should roughly parallel the concepts defined in the relevant regional ITS models (for example DATEX II) and reuse concepts defined elsewhere within the ITS Ontology (`its-core`, `its-time`, `its-location`, etc.).
- Preferred namespace prefix: `its-t-network`
- File organization:
  - Master ontology file is `docs/its-t-network.ttl` (preferred prefix + `.ttl`); it imports the pattern modules
  - Ontology module filenames use **UpperCamelCase** matching the local name of the `owl:Ontology` resource (e.g., `TransportNetworkPattern.ttl`, `RoadNetworkSHACL.ttl`) rather than kebab-case, to facilitate htaccess mapping from ontology IRIs to files
  - A `*Pattern.ttl` file for each pattern (subset of concepts) within the topic area
  - A separate `*SHACL.ttl` file for each pattern with validation rules
