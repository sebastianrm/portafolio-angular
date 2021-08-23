FROM ruby:2.4-alpine
RUN apk update && apk add build-base nodejs tzdata

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install --binstubs

COPY . .
