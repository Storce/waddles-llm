# OCF LLM aka Waddles

This is an LLM fine-tuned and catered towards being a helpful assistant in the OCF (kind of like an Operational Staff member with a lot more technical knowledge to fix things on the backend). Welcome to the OCF staff, Waddles!

## Structure

The project composes of two components with different tech stacks:

* [`llm-backend`](./llm-backend/README.md) represents the backend that lives on HPC

These two components talk to each other using a RESTful API, an example can be found [here](./llm-backend/example/server_test.py). However, there is a caveat that the input to the model needs to be passed using the format specified [here](./llm-backend/knowledge_db/llm_config/prompt.py) in `get_prompt_template()`.

* [`llm-frontend`](./llm-frontend/README.md) represents the application frontend that lives on the desktops

## Contributing

Visit the individual `README.md` file for each component to see how to contribute. (Click on the individual names of the component.)

## Future Predictions

 This might become an interest group in some future semester so if you're seeing this once it is, just know I called it way back when.
