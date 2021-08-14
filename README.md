# ReactJs NodeJs Express Graphql Apollo

Demo project.

## SpaceX API

https://docs.spacexdata.com/

## Grphiql Queries

**1. All Launches**
```
{
    launches {
        flight_number
        rocket {
            rocket_id
            rocket_name
            rocket_type
        }
    }
}
```

**2. One Launch**
```
{
    launch(flight_number: 2) {
    	flight_number
        mission_name
		rocket {
            rocket_id
            rocket_name
            rocket_type
		}
    }
}
```
