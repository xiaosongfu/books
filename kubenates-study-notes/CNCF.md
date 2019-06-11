OpenTracing
OpenMetrics
OpenTelemetry

---

OpenTelemetry 被宣布为一个新的 CNCF 沙箱项目，由 OpenTracing 和 OpenCensus 合并而成

https://opentelemetry.io/
https://opentracing.io/
https://opencensus.io/

https://github.com/open-telemetry/

---

Jaeger and OpenTelemetry: https://medium.com/jaegertracing/jaeger-and-opentelemetry-1846f701d9f2



docker run -d --name jaeger-example \
  --link jaeger \
  -p 9090-9093:8080-8083 \
  -e JAEGER_AGENT_HOST="jaeger" \
  jaegertracing/example-hotrod:1.12 \
  all
