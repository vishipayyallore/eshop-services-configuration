# Session 15

--
<sub>Introduction to **Configuration Service**, and Deep Dive [NodeJs]</sub>

## **intro configuration service** (15m)
>
> 1. why is it needed? (5m)
> 1. what is a configuration service? (5m)
> 1. what should the payload look like? (5m)

## **architecture overview** (25m)
>
> 1. software design (15m)
>
> - simple function (5m)
>   - in order to simplify design
>   - enabled by a reliance on environment variables
> - how do we make the SDLC of this pattern work? (10m)
>   - dispatcher pattern
>   - visitor pattern
>   - factory pattern
>
> 2. system design (10m)
>
> - how to populate environment variables (5m)
>   - how to gather environment variables
>   - how to expose environment variables
> - how to update running script with environment (5m)
> - alternatives
>   - database (too complicated!)
>   - caching store (too complicated!)
>
## **hands on** (10m)
>
> 1. demonstrate in postman
> 1. demonstrate on commandline
