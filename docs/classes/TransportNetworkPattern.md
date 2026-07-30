![Draft for review only](https://isotc204.org/assets/img/draft_for_review.svg)

# ITS Ontology - Transport Network - Core Pattern

Core abstractions shared across transport network pattern modules (road, rail, pedestrian, micromobility, public transport, travel corridor, alerts), grounded on the ITS Location ontology features and geometries.

This pattern imports the following files:

- [https://w3id.org/itsdata/location/v1/AreaPattern](https://w3id.org/itsdata/location/v1/AreaPattern)
- [https://w3id.org/itsdata/location/v1/LinearPattern](https://w3id.org/itsdata/location/v1/LinearPattern)
- [https://w3id.org/itsdata/location/v1/LocationCorePattern](https://w3id.org/itsdata/location/v1/LocationCorePattern)
- [https://w3id.org/itsdata/location/v1/PointPattern](https://w3id.org/itsdata/location/v1/PointPattern)

This pattern consists of the following classes:

- [Junction](Junction.md)
- [Network Element](NetworkElement.md)
- [Scheduled Code](ScheduledCode.md)
- [Transport Network](TransportNetwork.md)
- [Transport Network Thing](TransportNetworkThing.md)
- [Transport Node](TransportNode.md)
- [Travelled Way](TravelledWay.md)
- [Travelled Way Lane](TravelledWayLane.md)
- [Travelled Way Link](TravelledWayLink.md)
- [Travelled Way Section](TravelledWaySection.md)
- [Travelled Way Segment](TravelledWaySegment.md)
This module defines the following properties:

- [hasEndNode](../properties/hasEndNode.md)
- [hasStartNode](../properties/hasStartNode.md)
- [partOfTravelCorridor](../properties/partOfTravelCorridor.md)
- [partOfTravelledWay](../properties/partOfTravelledWay.md)
- [TransportNetworkObjectProperty](../properties/TransportNetworkObjectProperty.md)


The formal definition of this pattern is available in TURTLE Syntax in two files, the [core semantics](../TransportNetworkPattern.ttl) and the SHACL [restrictions](../TransportNetworkSHACL.ttl).
