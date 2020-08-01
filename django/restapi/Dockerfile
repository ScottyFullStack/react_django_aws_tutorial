FROM python:3
ENV PYTHONUNBUFFERED 1
ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL
RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN pip3 install -r requirements.txt
RUN ./entrypoint.sh
EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]